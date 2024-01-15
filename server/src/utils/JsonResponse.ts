export class JsonResponse {
  message: string;
  status: number;
  path: string;
  data: any;

  constructor(path: string, message?: string, data?: any, status = 200) {
    this.message = message ?? 'ok';
    this.status = status;
    this.path = path;
    this.data = data ?? null;
  }
}
