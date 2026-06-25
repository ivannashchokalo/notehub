"use client";

import css from "./EditProfilePage.module.css";
import { useAuthStore } from "@/lib/store/authStore";
import { useRouter } from "next/navigation";
import { updateAvatar, updateMe } from "@/lib/api/clientApi";
import AvatarUploader from "@/components/AvatarUploader/AvatarUploader";
import { useState } from "react";

export default function Edit() {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleUpdate = async (formData: FormData) => {
    if (!user) return;

    const username = formData.get("username") as string;

    try {
      if (avatarFile) {
        const avatarFormData = new FormData();

        avatarFormData.append("avatar", avatarFile);

        await updateAvatar(avatarFormData);
      }

      const updatedUser = await updateMe({
        username,
      });

      setUser(updatedUser);

      router.push("/profile");
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  const handleCancel = () => {
    router.push("/profile");
  };

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit Profile</h1>

        <AvatarUploader avatar={user?.avatar} onFileSelect={setAvatarFile} />

        <form className={css.profileInfo} action={handleUpdate}>
          <div className={css.usernameWrapper}>
            <label htmlFor="username">Username:</label>
            <input
              name="username"
              defaultValue={user?.username}
              id="username"
              type="text"
              className={css.input}
            />
          </div>

          <p>Email: {user?.email}</p>

          <div className={css.actions}>
            <button type="submit" className={css.saveButton}>
              Save
            </button>
            <button
              type="button"
              className={css.cancelButton}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
