export class Employee {
  static employees: Map<number, Employee> = new Map();

  constructor(public empId: number, public name: string, public address: string, public hourlyRate: number) {}

  static addEmp(empId: number, name: string, address: string, hourlyRate: number) {
    const emp = new Employee(empId, name, address, hourlyRate);
    Employee.employees.set(empId, emp);
  }

  static getEmp(empId: number): Employee | undefined {
    return Employee.employees.get(empId)
  }

}