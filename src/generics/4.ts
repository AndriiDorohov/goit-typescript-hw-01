type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function updateUserData(data: Partial<User>): void {
  console.log("Оновлюємо користувача:", data);
}

updateUserData({
  email: "user@mail.com",
  password: "password123",
});
