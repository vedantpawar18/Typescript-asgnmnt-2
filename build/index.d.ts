interface WorkTodo {
    title: string;
    status: boolean;
    id: number;
}
declare let obj1: WorkTodo;
interface person {
    name: string;
    last_name?: string;
}
declare let obj2: {
    name: string;
};
declare let obj3: {
    name: string;
    last_name: string;
};
declare const printPerson: ({ name }: person, { last_name }: person) => void;
interface Address {
    houseNo: number;
    street: string;
    city: string;
    state: string;
    postalCOde: number;
    country: string;
}
interface PersonDetails {
    prefix?: string;
    phones: number[];
    address: string[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}
declare const PhoneBook: ({ email, firstname }: PersonDetails) => void;
declare let arrPersons: PersonDetails[];
