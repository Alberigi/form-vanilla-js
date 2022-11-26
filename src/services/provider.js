import { FormService } from "./form.service";
import { CustomToastService } from "./customToast.service";

const customToastService = new CustomToastService();
export const formService = new FormService(customToastService);
