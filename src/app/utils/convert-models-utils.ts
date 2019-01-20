import {FormulaModel} from '../models/formula';
import {CollectionModel} from '../models/collection';
import {FormulaColourantModel, FormulaProductBaseModel, ProductBaseCanModel} from '../models/formula_product_base';
import {ProductBaseModel} from '../models/product_base';
import {ProductModel} from '../models/product';
import {BaseModel} from '../models/base';
import {ColorantModel} from '../models/colorant';
import {MachineColourantModel, MachineModel, ResponseMessageModel, RoleModel, UserModel} from '../models/user.model';
import {MachineFormulaProductBaseLogModel} from '../models/dispense.task.model';
import {CustomerModel, CustomerSelectedModel} from '../models/customer';
import {FormulaCustomerModel} from '../models/formulacustomer';

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
  static convertToFormulaModel(object: any): FormulaModel {
    const formula = new FormulaModel();
    formula.formulaId = object.formulaId;
    formula.formulaCode = object.formulaCode;
    formula.formulaName = object.formulaName;
    formula.collection = ConvertModelUtils.convertCollectionModel(object.collection);
    formula.createdDate = object.createdDate;
    formula.createBy = object.createBy;
    formula.baseOnCan = object.baseOnCan;
    formula.machine = object.machine != null ? ConvertModelUtils.convertToMachineModel(object.machine) : null;
    formula.approximateColor = object.approximateColor;
    formula.comment = object.comment;
    formula.substrate = object.substrate;
    return formula;
  }

  static convertToFormulaCustomerModel(object: any): FormulaCustomerModel {
    const formulaCustomer = new FormulaCustomerModel();
    formulaCustomer.formulaCustomerId = object.formulaCustomerId;
    formulaCustomer.formula = ConvertModelUtils.convertToFormulaModel(object.formula);
    formulaCustomer.customer = ConvertModelUtils.convertToCustomerModel(object.customer);
    return formulaCustomer;
  }

  static convertToProductModel(object: any): ProductModel {
    const item = new ProductModel();
    item.productId = object.productId;
    item.productCode = object.productCode;
    item.productName = object.productName;
    item.createdDate = object.createdDate;
    item.createBy = object.createBy;
    return item;
  }

  static convertToFormulaProductBaseModel(object: any): FormulaProductBaseModel {
    const item = new FormulaProductBaseModel();
    item.formulaProductBaseId = object.formulaProductBaseId;
    item.productBase = ConvertModelUtils.convertToProductBaseModel(object.productBase);
    item.formula = ConvertModelUtils.convertToFormulaModel(object.formula);
    return item;
  }

  static convertToFormulaColourantModel(object: any): FormulaColourantModel {
    const item = new FormulaColourantModel();
    item.formulaColourantId = object.formulaColourantId;
    item.formula = ConvertModelUtils.convertToFormulaModel(object.formula);
    item.colourant = ConvertModelUtils.convertToColourantModel(object.colourant);
    item.quantity = object.quantity;
    return item;
  }

  static convertToColourantModel(object: any): ColorantModel {
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

  static convertToProductBaseCanModel(object: any) {
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

  static convertFormulaProductBaseModel(object: any): FormulaProductBaseModel {
    const formulaProductBase = new FormulaProductBaseModel();
    formulaProductBase.formulaProductBaseId = object.formulaProductBaseId;
    formulaProductBase.formula = ConvertModelUtils.convertToFormulaModel(object.formula);
    formulaProductBase.productBase = ConvertModelUtils.convertToProductBaseModel(object.productBase);
    return formulaProductBase;
  }

  static convertToProductBaseModel(object: any) {
    const productBase = new ProductBaseModel();
    productBase.productBaseId = object.productBaseId;
    productBase.product = ConvertModelUtils.convertToProductModel(object.product);
    productBase.base = ConvertModelUtils.convertToBaseModel(object.base);
    productBase.rbgHex = object.rbgHex;
    productBase.density = object.density;
    return productBase;
  }

  static convertToBaseModel(object: any) {
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

  static convertToMachineColourantModel(object: any): MachineColourantModel {
    const item = new MachineColourantModel();
    item.machineColourantId = object.machineColourantId;
    item.colourant = ConvertModelUtils.convertToColourantModel(object.colourant);
    item.machine = ConvertModelUtils.convertToMachineModel(object.machine);
    item.quantity = object.quantity;
    return item;
  }

  static convertToDispenseFormulaProductBaseModel(object: any): MachineFormulaProductBaseLogModel {
    const item = new MachineFormulaProductBaseLogModel();
    item.machineFormulaProductBaseId = object.machineFormulaProductBaseId;
    item.formulaProductBase = ConvertModelUtils.convertToFormulaProductBaseModel(object.formulaProductBase);
    item.machine = ConvertModelUtils.convertToMachineModel(object.machine);
    item.user = ConvertModelUtils.convertToUserModel(object.user);
    item.canSize = object.quantity;
    item.createdDate = object.createdDate;
    item.finishedDate = object.finishedDate;
    item.status = object.status;
    return item;
  }


  static convertToCustomerModel(customer: any): CustomerModel {
    const item = new CustomerModel();
    item.customerId = customer.customerId;
    item.name = customer.name;
    item.phone = customer.phone;
    item.email = customer.email;
    item.address = customer.address;
    item.note = customer.note;
    item.machine = customer.machine != null ? ConvertModelUtils.convertToMachineModel(customer.machine) : null;
    return item;
  }

  static convertToResponseMessageModel(object: any): ResponseMessageModel {
    const item = new ResponseMessageModel();
    item.type = object.type;
    item.message = object.message;
    return item;
  }

  static convertToSavingFormulaProductBaseDBItem(formulaProductBaseId: number,
                                                 formula: FormulaModel,
                                                 productBase: ProductBaseModel,
                                                 machine: MachineModel,
                                                 formulaColourantList: FormulaColourantModel[],
                                                 listCustomerSelected: CustomerSelectedModel[]) {
    const machineDbItem = {
      machineId: machine.machineId
    };

    const formulaProductBaseDBItem = {
      formulaProductBaseId: formulaProductBaseId,
      formula: ConvertModelUtils.convertToFormulaDBItem(formula),
      productBase: {productBaseId: productBase.productBaseId}
    };

    const formulaColourantListDBItem = [];
    for (const item of formulaColourantList) {
      if (item.quantity != null && item.quantity > 0) {
        formulaColourantListDBItem.push(ConvertModelUtils.convertToFormulaColourantDBItem(item));
      }
    }

    const _listCustomerSelected = [];
    for (const customerSelect of listCustomerSelected) {
      if (customerSelect.checked) {
        _listCustomerSelected.push(customerSelect.customer.customerId);
      }
    }

    return {
      formulaProductBase: formulaProductBaseDBItem,
      machine: machineDbItem,
      formulaColourantList: formulaColourantListDBItem,
      listCustomer : _listCustomerSelected
    };
  }

  static convertToFormulaDBItem(formula: FormulaModel) {
    return {
      formulaId: formula.formulaId,
      formulaCode: formula.formulaCode,
      formulaName: formula.formulaName,
      collection: {collectionId: formula.collection.collectionId},
      baseOnCan: formula.baseOnCan,
      approximateColor: formula.approximateColor,
      substrate: formula.substrate,
      comment: formula.comment,
    };
  }

  static convertToFormulaColourantDBItem(formulaColourant: FormulaColourantModel) {
    return {
      formulaColourantId: formulaColourant.formulaColourantId,
      colourant: {colourantId: formulaColourant.colourant.colourantId},
      formula: {formulaId: formulaColourant.formula.formulaId},
      quantity: formulaColourant.quantity,
    };
  }

  static convertToCustomerDBItem(dbItem: CustomerModel, machine: MachineModel) {
    return {
      customerId: dbItem.customerId,
      name: dbItem.name,
      phone: dbItem.phone,
      email: dbItem.email,
      address: dbItem.address,
      note: dbItem.note,
      machine: {machineId: machine.machineId},
    };
  }
}
