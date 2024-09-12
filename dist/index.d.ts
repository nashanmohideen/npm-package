type Organiser = {
    title: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    telephone: string;
    postCode: string;
    firstLineOfAddress: string;
    secondLineOfAddress: string;
    city: string;
    country: string;
    travelling: boolean;
};
declare const generateMockOrganiser: (overrides?: Partial<Organiser>) => Organiser;
export default generateMockOrganiser;
