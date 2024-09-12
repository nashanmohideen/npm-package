import generateMockOrganiser from "@nashanunais/npm-package";

const mockOrganiser = generateMockOrganiser({
    firstName: 'Nashan',
    email:'nashan.unais@gmail.com',
    travelling:false,
});


console.log(mockOrganiser);