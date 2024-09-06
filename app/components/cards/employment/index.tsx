import Card, { CardHeader } from '../Card';
import EmployeeList from './EmployeeList';

export default function EmploymentCard() {
    return (
        <Card>
            <CardHeader>Employees</CardHeader>
            <EmployeeList />
        </Card>
    );
}
