import {FormulaModel} from '../models/formula';
import {CollectionModel} from '../models/collection';
import {FormulaColourantModel, FormulaProductBaseModel, ProductBaseCanModel} from '../models/formula_product_base';
import {ProductBaseModel} from '../models/product_base';
import {ProductModel} from '../models/product';
import {BaseModel} from '../models/base';
import {ColorantModel} from '../models/colorant';
import {MachineColourantModel, MachineModel, ResponseMessageModel, RoleModel, UserModel} from '../models/user.model';
import {MachineFormulaProductBaseLogModel} from '../models/dispense.task.model';

export interface TaskInterface {
  taskId: number;
  type: string;
  status: string;
  process: number;
  totalProcess: number;
  callBackFunction;
}

export const MAP_TASK_STATE = {
  SLEEP: 'SLEEP',
  IN_PROGRESS: 'IN-PROGRESS',
  FINISHED: 'FINISHED'
};

export default class ConvertModelUtils {
  static convertToFormulaObject(object: any): FormulaModel {
    const formula = new FormulaModel();
    formula.formulaId = object.formulaId;
    formula.formulaCode = object.formulaCode;
    formula.formulaName = object.formulaName;
    formula.collection = ConvertModelUtils.convertCollectionModel(object.collection);
    formula.createdDate = object.createdDate;
    formula.createBy = object.createBy;
    formula.baseOnCan = object.baseOnCan;
    return formula;
  }

  static convertToProductObject(object: any): ProductModel {
    const item = new ProductModel();
    item.productId = object.productId;
    item.productCode = object.productCode;
    item.productName = object.productName;
    item.createdDate = object.createdDate;
    item.createBy = object.createBy;
    return item;
  }

  static convertToFormulaProductBaseObject(object: any): FormulaProductBaseModel {
    const item = new FormulaProductBaseModel();
    item.formulaProductBaseId = object.formulaProductBaseId;
    item.productBase = ConvertModelUtils.convertProductBaseObject(object.productBase);
    item.formula = ConvertModelUtils.convertToFormulaObject(object.formula);
    return item;
  }

  static convertToFormulaColourantObject(object: any): FormulaColourantModel {
    const item = new FormulaColourantModel();
    item.formulaColourantId = object.formulaColourantId;
    item.formula = ConvertModelUtils.convertToFormulaObject(object.formula);
    item.colourant = ConvertModelUtils.convertToColourantObject(object.colourant);
    item.quantity = object.quantity;
    return item;
  }

  static convertToColourantObject(object: any): ColorantModel {
    const item = new ColorantModel();
    item.colourantId = object.colourantId;
    item.colourantCode = object.colourantCode;
    item.colourantName = object.colourantName;
    item.density = object.density;
    item.pricePerUnit = object.pricePerUnit;
    item.surcharge = object.surcharge;
    item.rbgHex = object.rbgHex === '#00' ? '#000000' : object.rbgHex;
    item.kind = object.kind;
    return item;
  }

  static convertToProductBaseCanObject(object: any) {
    const item = new ProductBaseCanModel();
    item.productBaseCanId = object.productBaseCanId;
    item.productBase = object.productBase;
    item.can = object.can;
    item.unit = object.unit;
    item.pricePerCan = object.pricePerCan;
    item.barCode = object.barCode;
    item.percentage = object.percentage;
    return item;
  }

  static convertCollectionModel(object: any): CollectionModel {
    const collection = new CollectionModel();
    collection.collectionId = object.collectionId;
    collection.collectionName = object.collectionName;
    collection.description = object.description;
    collection.machine = object.machine != null ? ConvertModelUtils.convertToMachineModel(object.machine) : null;
    return collection;
  }

  static convertFormulaProductBaseObject(object: any): FormulaProductBaseModel {
    const formulaProductBase = new FormulaProductBaseModel();
    formulaProductBase.formulaProductBaseId = object.formulaProductBaseId;
    formulaProductBase.formula = ConvertModelUtils.convertToFormulaObject(object.formula);
    formulaProductBase.productBase = ConvertModelUtils.convertProductBaseObject(object.productBase);
    return formulaProductBase;
  }

  static convertProductBaseObject(object: any) {
    const productBase = new ProductBaseModel();
    productBase.productBaseId = object.productBaseId;
    productBase.product = ConvertModelUtils.convertProductObject(object.product);
    productBase.base = ConvertModelUtils.convertBaseObject(object.base);
    productBase.rbgHex = object.rbgHex;
    productBase.density = object.density;
    return productBase;
  }

  static convertProductObject(object: any) {
    const product = new ProductModel();
    product.productId = object.productId;
    product.productCode = object.productCode;
    product.productName = object.productName;
    return product;
  }

  static convertBaseObject(object: any) {
    const base = new BaseModel();
    base.baseCode = object.baseCode;
    base.baseId = object.baseId;
    base.baseName = object.baseName;
    return base;
  }

  static convertToUserModel(object: any): UserModel {
    const user = new UserModel();
    user.userId = object.userId;
    user.userName = object.userName;
    user.role = object.role != null ? ConvertModelUtils.convertToRoleModel(object.role) : null;
    user.machine = object.machine != null ? ConvertModelUtils.convertToMachineModel(object.machine) : null;
    return user;
  }

  static convertToRoleModel(object: any): RoleModel {
    const role = new RoleModel();
    role.roleId = object.roleId;
    role.roleName = object.roleName;
    return role;
  }

  static convertToMachineModel(object: any): MachineModel {
    const machine = new MachineModel();
    machine.machineId = object.machineId;
    machine.code = object.code;
    machine.name = object.name;
    machine.minQuantity = object.minQuantity;
    machine.warningQuantity = object.warningQuantity;
    machine.maxQuantity = object.maxQuantity;
    return machine;
  }

  static convertToMachineColourant(object: any): MachineColourantModel {
    const item = new MachineColourantModel();
    item.machineColourantId = object.machineColourantId;
    item.colourant = ConvertModelUtils.convertToColourantObject(object.colourant);
    item.machine = ConvertModelUtils.convertToMachineModel(object.machine);
    item.quantity = object.quantity;
    return item;
  }

  static convertToDispenseFormulaProductBase(object: any): MachineFormulaProductBaseLogModel {
    const item = new MachineFormulaProductBaseLogModel();
    item.machineFormulaProductBaseId = object.machineFormulaProductBaseId;
    item.formulaProductBase = ConvertModelUtils.convertToFormulaProductBaseObject(object.formulaProductBase);
    item.machine = ConvertModelUtils.convertToMachineModel(object.machine);
    item.user = ConvertModelUtils.convertToUserModel(object.user);
    item.canSize = object.quantity;
    item.createdDate = object.createdDate;
    item.finishedDate = object.finishedDate;
    item.status = object.status;
    return item;
  }

  static convertToResponseMessageModel(object: any): ResponseMessageModel {
    const item = new ResponseMessageModel();
    item.type = object.type;
    item.message = object.message;
    return item;
  }
}
