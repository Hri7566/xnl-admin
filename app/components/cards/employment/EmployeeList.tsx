import { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '~/components/ui/table';
import { Skeleton } from '~/components/ui/skeleton';

interface Employee {
    id: number;
    displayName: string;
    tokenContainerId: string;
    position: string;
}

export default function EmployeeList() {
    // Get list of employees from API
    const [employees, setEmployees] = useState([] as Employee[]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await fetch(
                'https://xnl.hri7566.info/api/employment'
            );
            const data = (await response.json()) as {
                type: 'employment';
                count: number;
                employees: Employee[];
            };
            setEmployees(data.employees);
        };
        fetchEmployees();
    }, []);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Display Name</TableHead>
                    <TableHead>Token Container ID</TableHead>
                    <TableHead>Position</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="overflow-y-scroll">
                {employees.length === 0 ? (
                    <TableRow>
                        <TableCell>
                            <Skeleton className="h-4 w-full" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-4 w-full" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-4 w-full" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-4 w-full" />
                        </TableCell>
                    </TableRow>
                ) : (
                    employees.map(employee => (
                        <TableRow key={employee.id}>
                            <TableCell>{employee.id}</TableCell>
                            <TableCell>{employee.displayName}</TableCell>
                            <TableCell>{employee.tokenContainerId}</TableCell>
                            <TableCell>{employee.position}</TableCell>
                        </TableRow>
                    ))
                )}
            </TableBody>
        </Table>
    );
}
