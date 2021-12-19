export interface KeyVal {
  id: number;
  name: string;
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  locationId: number;
  departmentId: number;
  startDate: Date | number | string;
}
