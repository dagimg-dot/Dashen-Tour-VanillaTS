import { DB } from '@/database';
import { HttpException } from '@/exceptions/HttpException';
import { Package } from '@/interfaces/packages.interface';
import { Service } from 'typedi';

@Service()
export class PackageService {
  public packages = DB.Packages;

  public async findAllPackages(): Promise<Package[]> {
    const allPackages: Package[] = await DB.Packages.findAll();

    return allPackages;
  }

  public async findiById(packageId: number): Promise<Package> {
    const findPackage = await DB.Packages.findByPk(packageId);

    if (!findPackage) throw new HttpException(404, "Package doesn't exist");

    return findPackage;
  }

  public async createPackage(packageData: Package): Promise<Package> {
    const createPackageData: Package = await DB.Packages.create(packageData);

    return createPackageData;
  }

  public async updatePackage(packageId: number, packageData: Package): Promise<Package> {
    const findPackage = await DB.Packages.findByPk(packageId);

    if (!findPackage) throw new HttpException(404, "Package doesn't exist");

    await DB.Packages.update({ ...packageData }, { where: { packageId: packageId } });

    const updatePackage = await DB.Packages.findByPk(packageId);

    return updatePackage;
  }

  public async deletePackage(packageId: number): Promise<Package> {
    const findPackage = await DB.Packages.findByPk(packageId);
    if (!findPackage) throw new HttpException(404, "Package doesn't exist");

    await DB.Packages.destroy({ where: { packageId: packageId } });

    return findPackage;
  }
}
