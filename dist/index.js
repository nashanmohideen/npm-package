import { faker } from '@faker-js/faker';
const generateMockOrganiser = (overrides = {}) => {
    return Object.assign({ title: faker.person.prefix(), firstName: faker.person.firstName(), lastName: faker.person.lastName(), dateOfBirth: faker.date.birthdate({ min: 18, max: 95, mode: 'age' }).toISOString().split('T')[0], email: faker.internet.email(), telephone: faker.phone.number(), postCode: faker.location.zipCode(), firstLineOfAddress: faker.location.streetAddress(), secondLineOfAddress: faker.location.secondaryAddress(), city: faker.location.city(), country: faker.location.countryCode(), travelling: faker.datatype.boolean() }, overrides);
};
export default generateMockOrganiser;
