import Joi from 'joi-browser';

const schema = {
  subContractorName: Joi.string()
    .required()
    .label('SubContractorName'),
  subContractorCode: Joi.string()
    .required()
    .label('SubContractorCode'),
  subContractorContactPerson: Joi.string()
    .required()
    .label('SubContractorContactPerson'),
  subContractorContactAddress: Joi.string()
    .required()
    .label('subContractorContactAddress'),
  subContractorPhone: Joi.string()
    .length(10)
    .required()
    .label('SubContractorPhone'),
  subContractorEmail: Joi.string()
    .required()
    .email()
    .label('SubContractorEmail'),
};

export const validate = scr => {
  const validationData = {
    subContractorName: scr.subContractorName,
    subContractorCode: scr.subContractorCode,
    subContractorContactPerson: scr.subContractorContactPerson,
    subContractorContactAddress: scr.subContractorContactAddres,
    subContractorPhone: scr.subContractorPhone,
    subContractorEmail: scr.subContractorEmail,
  };
  const result = Joi.validate(validationData, schema, { abortEarly: false });
  console.log('result from validation', result);
  return result;
};
