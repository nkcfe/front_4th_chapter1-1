import { useProfileForm } from "../model/use-profile-form";

function ProfileForm() {
  const { user, handleSubmit } = useProfileForm();

  document.addEventListener("submit", handleSubmit);

  return `
    <form id="profile-form">
      <div class="mb-4">
        <label
          for="username"
          class="block text-gray-700 text-sm font-bold mb-2"
          >사용자 이름</label
        >
        <input
          type="text"
          id="username"
          name="username"
          value="${user.username || ""}"
          class="w-full p-2 border rounded"
        />
      </div>
      <div class="mb-4">
        <label
          for="email"
          class="block text-gray-700 text-sm font-bold mb-2"
          >이메일</label
        >
        <input
          type="email"
          id="email"
          name="email"
          placeholder="이메일을 입력해주세요."
          value="${user.email || ""}"
          class="w-full p-2 border rounded"
        />
      </div>
      <div class="mb-6">
        <label
          for="bio"
          class="block text-gray-700 text-sm font-bold mb-2"
          >자기소개
          </label
        >
        <textarea
          id="bio"
          name="bio"
          rows="4"
          class="w-full p-2 border rounded"
          placeholder="자기소개를 작성해보세요."
        >${user.bio || ""}</textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white p-2 rounded font-bold"
      >
        프로필 업데이트
      </button>
    </form>
  `;
}

export { ProfileForm };