import {FormulaModel} from '../models/formula';
import {CollectionModel} from '../models/collection';
import {FormulaColourantModel, FormulaProductBaseModel, ProductBaseCanModel} from '../models/formula_product_base';
import {ProductBaseModel} from '../models/product_base';
import {ProductModel} from '../models/product';
import {BaseModel} from '../models/base';
import {ColorantModel} from '../models/colorant';

export default class ConvertModelUtils {
  static convertToFormulaObject(object: any): FormulaModel {
    const formula = new FormulaModel();
    formula.formulaId = object.formulaId;
    formula.formulaCode = object.formulaCode;
    formula.formulaName = object.formulaName;
    formula.collection = ConvertModelUtils.convertCollectionObject(object.collection);
    formula.createdDate = object.createdDate;
    formula.createBy = object.createBy;
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
    item.rbgHex = object.rbgHex;
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

  static convertCollectionObject(object: any): CollectionModel {
    const collection = new CollectionModel();
    collection.collectionId = object.collectionId;
    collection.collectionName = object.collectionName;
    collection.description = object.description;
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
}
