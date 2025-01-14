// import { getCustomFieldMapping } from '@countryconfig/utils/mapping/field-mapping-utils'
// import { formMessageDescriptors } from './common/messages'
// import { Conditional, SerializedFormField } from './types/types'

// export function getMiddleNameField(
//   middleName: string,
//   previewGroup: string,
//   conditionals: Conditional[]
// ): SerializedFormField {
//   // GIVE THE FIELD A UNIQUE NAME.  IF THE NAME IS ALREADY IN USE, YOU WILL NOTICE AN ERROR ON PAGE LOAD IN DEVELOPMENT
//   const fieldName: string = 'middleNamesEng'
//   // THE fieldId STRING IS A DOT SEPARATED STRING AND IS IMPORTANT TO SET CORRECTLY DEPENDING ON WHERE THE CUSTOM FIELD IS LOCATED
//   // THE FORMAT IS event.sectionId.groupId.uniqueFieldName
//   let lol

//   switch (middleName) {
//     case 'child':
//       lol = 'birth.child.child-view-group'
//       break
//     case 'mother':
//       lol = 'birth.mother.mother-view-group'
//       break
//     case 'father':
//       lol = 'birth.father.father-view-group'
//       break
//     case 'informant':
//       lol = 'birth.informant.informant-view-group'
//       break
//     default:
//       lol = 'birth.child.father-view-group' // Or a more appropriate default based on your logic
//   }
//   const fieldId: string = `${lol}.${fieldName}`
//   // IN ORDER TO USE THE VALUE ON A CERTIFICATE
//   // THE groupId IS IGNORED AND THE HANDLEBAR WILL LOG IN THE CONSOLE
//   // IN THIS EXAMPLE, IT WILL RESOLVE IN CAMELCASE TO "{{birthChildFavouriteColor}}"

//   return {
//     name: fieldName,
//     previewGroup,
//     conditionals,
//     customQuestionMappingId: fieldId,
//     custom: true,
//     required: true,
//     type: 'TEXT', // ANY FORM FIELD TYPE IS POSSIBLE. ADD ADDITIONAL PROPS AS REQUIRED.  REFER TO THE form/README.md FILE
//     label: formMessageDescriptors.middleName,
//     initialValue: '',
//     validator: [
//       {
//         operation: 'englishOnlyNameFormat'
//       }
//     ], // EDIT VALIDATORS AS YOU SEE FIT
//     mapping: getCustomFieldMapping(fieldId), // ALL CUSTOM FIELDS MUST USE THIS MAPPING FUNCTION
//     maxLength: 32
//   }
// }

// export function getSpecifyRankField(): SerializedFormField {
//   // GIVE THE FIELD A UNIQUE NAME.  IF THE NAME IS ALREADY IN USE, YOU WILL NOTICE AN ERROR ON PAGE LOAD IN DEVELOPMENT
//   const fieldName: string = 'specifyRank'
//   // THE fieldId STRING IS A DOT SEPARATED STRING AND IS IMPORTANT TO SET CORRECTLY DEPENDING ON WHERE THE CUSTOM FIELD IS LOCATED
//   // THE FORMAT IS event.sectionId.groupId.uniqueFieldName
//   const fieldId: string = `birth.child.child-view-group.${fieldName}`
//   // IN ORDER TO USE THE VALUE ON A CERTIFICATE
//   // THE groupId IS IGNORED AND THE HANDLEBAR WILL LOG IN THE CONSOLE
//   // IN THIS EXAMPLE, IT WILL RESOLVE IN CAMELCASE TO "{{birthChildFavouriteColor}}"

//   return {
//     name: fieldName,
//     customQuestionMappingId: fieldId,
//     custom: true,
//     required: false,
//     type: 'NUMBER', // ANY FORM FIELD TYPE IS POSSIBLE. ADD ADDITIONAL PROPS AS REQUIRED.  REFER TO THE form/README.md FILE
//     label: formMessageDescriptors.specifyRank,
//     initialValue: '',
//     validator: [
//       {
//         operation: 'greaterThanZero'
//       },
//       {
//         operation: 'maxLength',
//         parameters: [2]
//       }
//     ], // EDIT VALIDATORS AS YOU SEE FIT
//     mapping: getCustomFieldMapping(fieldId), // ALL CUSTOM FIELDS MUST USE THIS MAPPING FUNCTION
//     conditionals: [
//       {
//         action: 'hide',
//         expression: `((values.birthType==="SINGLE") || (!values.birthType))`
//       }
//     ] // EDIT CONDITIONALS AS YOU SEE FIT
//   }
// }

// export function getBirthOrderField(): SerializedFormField {
//   // GIVE THE FIELD A UNIQUE NAME.  IF THE NAME IS ALREADY IN USE, YOU WILL NOTICE AN ERROR ON PAGE LOAD IN DEVELOPMENT
//   const fieldName: string = 'birthOrder'
//   // THE fieldId STRING IS A DOT SEPARATED STRING AND IS IMPORTANT TO SET CORRECTLY DEPENDING ON WHERE THE CUSTOM FIELD IS LOCATED
//   // THE FORMAT IS event.sectionId.groupId.uniqueFieldName
//   const fieldId: string = `birth.child.child-view-group.${fieldName}`
//   // IN ORDER TO USE THE VALUE ON A CERTIFICATE
//   // THE groupId IS IGNORED AND THE HANDLEBAR WILL LOG IN THE CONSOLE
//   // IN THIS EXAMPLE, IT WILL RESOLVE IN CAMELCASE TO "{{birthChildFavouriteColor}}"

//   return {
//     name: fieldName,
//     customQuestionMappingId: fieldId,
//     custom: true,
//     required: false,
//     type: 'NUMBER', // ANY FORM FIELD TYPE IS POSSIBLE. ADD ADDITIONAL PROPS AS REQUIRED.  REFER TO THE form/README.md FILE
//     label: formMessageDescriptors.birthOrder,
//     initialValue: '',
//     validator: [
//       {
//         operation: 'range',
//         parameters: [1, 50]
//       },
//       {
//         operation: 'maxLength',
//         parameters: [2]
//       }
//     ], // EDIT VALIDATORS AS YOU SEE FIT
//     mapping: getCustomFieldMapping(fieldId), // ALL CUSTOM FIELDS MUST USE THIS MAPPING FUNCTION
//     conditionals: [] // EDIT CONDITIONALS AS YOU SEE FIT
//   }
// }

// export function getTotalNumberOfChildrenBornAliveField(): SerializedFormField {
//   // GIVE THE FIELD A UNIQUE NAME.  IF THE NAME IS ALREADY IN USE, YOU WILL NOTICE AN ERROR ON PAGE LOAD IN DEVELOPMENT
//   const fieldName: string = 'totalNumberOfChildrenBornAlive'
//   // THE fieldId STRING IS A DOT SEPARATED STRING AND IS IMPORTANT TO SET CORRECTLY DEPENDING ON WHERE THE CUSTOM FIELD IS LOCATED
//   // THE FORMAT IS event.sectionId.groupId.uniqueFieldName
//   const fieldId: string = `birth.mother.mother-view-group.${fieldName}`
//   // IN ORDER TO USE THE VALUE ON A CERTIFICATE
//   // THE groupId IS IGNORED AND THE HANDLEBAR WILL LOG IN THE CONSOLE
//   // IN THIS EXAMPLE, IT WILL RESOLVE IN CAMELCASE TO "{{birthChildFavouriteColor}}"

//   return {
//     name: fieldName,
//     customQuestionMappingId: fieldId,
//     custom: true,
//     required: false,
//     type: 'NUMBER', // ANY FORM FIELD TYPE IS POSSIBLE. ADD ADDITIONAL PROPS AS REQUIRED.  REFER TO THE form/README.md FILE
//     label: formMessageDescriptors.totalNumberOfChildrenBornAlive,
//     initialValue: '',
//     validator: [
//       {
//         operation: 'range',
//         parameters: [0, 50]
//       },
//       {
//         operation: 'maxLength',
//         parameters: [2]
//       }
//     ], // EDIT VALIDATORS AS YOU SEE FIT
//     mapping: getCustomFieldMapping(fieldId), // ALL CUSTOM FIELDS MUST USE THIS MAPPING FUNCTION
//     conditionals: [
//       {
//         action: 'hide',
//         expression: '!values.detailsExist'
//       }
//     ] // EDIT CONDITIONALS AS YOU SEE FIT
//   }
// }

// export function getChildrenStillLivingIncludingThisBirthField(): SerializedFormField {
//   // GIVE THE FIELD A UNIQUE NAME.  IF THE NAME IS ALREADY IN USE, YOU WILL NOTICE AN ERROR ON PAGE LOAD IN DEVELOPMENT
//   const fieldName: string = 'childrenStillLivingIncludingThisBirth'
//   // THE fieldId STRING IS A DOT SEPARATED STRING AND IS IMPORTANT TO SET CORRECTLY DEPENDING ON WHERE THE CUSTOM FIELD IS LOCATED
//   // THE FORMAT IS event.sectionId.groupId.uniqueFieldName
//   const fieldId: string = `birth.mother.mother-view-group.${fieldName}`
//   // IN ORDER TO USE THE VALUE ON A CERTIFICATE
//   // THE groupId IS IGNORED AND THE HANDLEBAR WILL LOG IN THE CONSOLE
//   // IN THIS EXAMPLE, IT WILL RESOLVE IN CAMELCASE TO "{{birthChildFavouriteColor}}"

//   return {
//     name: fieldName,
//     customQuestionMappingId: fieldId,
//     custom: true,
//     required: false,
//     type: 'NUMBER', // ANY FORM FIELD TYPE IS POSSIBLE. ADD ADDITIONAL PROPS AS REQUIRED.  REFER TO THE form/README.md FILE
//     label: formMessageDescriptors.childrenStillLivingIncludingThisBirth,
//     initialValue: '',
//     validator: [
//       {
//         operation: 'range',
//         parameters: [0, 50]
//       },
//       {
//         operation: 'maxLength',
//         parameters: [2]
//       }
//     ], // EDIT VALIDATORS AS YOU SEE FIT
//     mapping: getCustomFieldMapping(fieldId), // ALL CUSTOM FIELDS MUST USE THIS MAPPING FUNCTION
//     conditionals: [
//       {
//         action: 'hide',
//         expression: '!values.detailsExist'
//       }
//     ] // EDIT CONDITIONALS AS YOU SEE FIT
//   }
// }

// export function getAgeTimeOfbirthField(ageBirth: string): SerializedFormField {
//   // GIVE THE FIELD A UNIQUE NAME.  IF THE NAME IS ALREADY IN USE, YOU WILL NOTICE AN ERROR ON PAGE LOAD IN DEVELOPMENT
//   const fieldName: string = 'ageTimeOfbirth'
//   // THE fieldId STRING IS A DOT SEPARATED STRING AND IS IMPORTANT TO SET CORRECTLY DEPENDING ON WHERE THE CUSTOM FIELD IS LOCATED
//   // THE FORMAT IS event.sectionId.groupId.uniqueFieldName
//   let age

//   switch (ageBirth) {
//     case 'mother':
//       age = 'birth.mother.mother-view-group'
//       break
//     case 'father':
//       age = 'birth.father.father-view-group'
//       break
//     default:
//       age = 'birth.child.father-view-group' // Or a more appropriate default based on your logic
//   }
//   const fieldId: string = `${age}.${fieldName}`
//   // IN ORDER TO USE THE VALUE ON A CERTIFICATE
//   // THE groupId IS IGNORED AND THE HANDLEBAR WILL LOG IN THE CONSOLE
//   // IN THIS EXAMPLE, IT WILL RESOLVE IN CAMELCASE TO "{{birthChildFavouriteColor}}"

//   return {
//     name: fieldName,
//     customQuestionMappingId: fieldId,
//     custom: true,
//     required: false,
//     type: 'NUMBER', // ANY FORM FIELD TYPE IS POSSIBLE. ADD ADDITIONAL PROPS AS REQUIRED.  REFER TO THE form/README.md FILE
//     label: formMessageDescriptors.ageTimeOfbirth,
//     initialValue: '',
//     validator: [
//       {
//         operation: 'range',
//         parameters: [14, 120]
//       },
//       {
//         operation: 'maxLength',
//         parameters: [3]
//       }
//     ], // EDIT VALIDATORS AS YOU SEE FIT
//     mapping: getCustomFieldMapping(fieldId), // ALL CUSTOM FIELDS MUST USE THIS MAPPING FUNCTION
//     conditionals: [
//       {
//         action: 'hide',
//         expression: '!values.detailsExist'
//       }
//     ] // EDIT CONDITIONALS AS YOU SEE FIT
//   }
// }
