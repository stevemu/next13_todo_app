import { Employee } from "./employee"

describe('employee', () => {
  it('can add a hourly employee', () => {
    Employee.addEmp(1, 'steve', '123 main st', 50)
    const emp1 = Employee.getEmp(1);
    expect(emp1!.empId).toBe(1);
    expect(emp1!.name).toBe('steve');
    expect(emp1!.address).toBe('123 main st');
    expect(emp1!.hourlyRate).toBe(50);
  })


})