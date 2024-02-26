import { Package } from '@/interfaces/packages.interface';
import { PackageService } from '@/services/packages.service';
import { Request, Response, NextFunction } from 'express';
import Container from 'typedi';

export class PackageController {
  public packageService = Container.get(PackageService);

  public getPackages = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllPackagesData = await this.packageService.findAllPackages();

      res.status(200).json({ data: findAllPackagesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getPackageById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const packageId = Number(req.params.id);
      const findAllPackagesData = await this.packageService.findiById(packageId);

      res.status(200).json({ data: findAllPackagesData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createPackage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const PackageData: Package = req.body;
      const createDestinatonData = await this.packageService.createPackage(PackageData);

      res.status(201).json({ data: createDestinatonData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updatePackage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const PackageID = Number(req.params.id);
      const PackageData: Package = req.body;
      const findPackageData: Package = await this.packageService.updatePackage(PackageID, PackageData);

      res.status(200).json({ data: findPackageData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deletePackage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const PackageID = Number(req.params.id);
      const deletePackageData: Package = await this.packageService.deletePackage(PackageID);

      res.status(200).json({ data: deletePackageData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
