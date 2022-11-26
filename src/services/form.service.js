export class FormService {
  constructor(customToastService) {
    this.customToastService = customToastService;

    const form = document.getElementById("form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.sendForm();
    });
  }
  getFormData() {
    return {
      name: document.getElementById("name").value,
      lastName: document.getElementById("lastName").value,
      password: document.getElementById("password").value,
      email: document.getElementById("email").value,
      state: document.getElementById("state").value,
      address: document.getElementById("address").value,
      Complement: document.getElementById("Complement").value,
      address: document.getElementById("cep").value,
      rememberMe: document.getElementById("gridCheck").value,
    };
  }

  validateData(data) {
    Object.keys(data).forEach((key) => {
      if (!data[key]) throw new Error(`Field ${key} is empty`);
    });
  }

  sendForm() {
    try {
      const formData = this.getFormData();
      this.validateData(formData);
      this.customToastService.success(
        `${formData.name} your form has been registered successfully`
      );
      console.log(formData);
    } catch (error) {
      this.customToastService.error(error.message);
    }
  }
}
