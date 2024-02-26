import { PackageController } from '@/controllers/packages.controller';
import { Routes } from '@/interfaces/routes.interface';
import { Router } from 'express';

export class PackageRoute implements Routes {
  public path = '/packages';
  public router = Router();
  public packagesController = new PackageController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.packagesController.getPackages);
    this.router.get(`${this.path}/:id(\\d+)`, this.packagesController.getPackageById);
    this.router.post(`${this.path}`, this.packagesController.createPackage);
    this.router.put(`${this.path}/:id(\\d+)`, this.packagesController.updatePackage);
    this.router.delete(`${this.path}/:id(\\d+)`, this.packagesController.deletePackage);
  }
}
