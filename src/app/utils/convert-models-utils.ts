import {FormulaModel} from '../models/formula';
import {CollectionModel} from '../models/collection';
import {FormulaProductBaseModel} from '../models/formula_product_base';
import {ProductBaseModel} from '../models/product_base';
import {ProductModel} from '../models/product';
import {BaseModel} from '../models/base';

export default class ConvertModelUtils {
  static convertFormulaObject(object: any) {
    const formula = new FormulaModel();
    formula.formulaId = object.formulaId;
    formula.formulaCode = object.formulaCode;
    formula.formulaName = object.formulaName;
    formula.collection = ConvertModelUtils.convertCollectionObject(object.collection);
    return formula;
  }

  static convertCollectionObject(object: any) {
    const collection = new CollectionModel();
    collection.collectionId = object.collectionId;
    collection.collectionName = object.collectionName;
    collection.description = object.description;
    return collection;
  }

  static convertFormularProductBaseObject(object: any) {
    const formulaProductBase = new FormulaProductBaseModel();
    formulaProductBase.formulaProductBaseId = object.formulaProductBaseId;
    formulaProductBase.formula = ConvertModelUtils.convertFormulaObject(object.formula);
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
