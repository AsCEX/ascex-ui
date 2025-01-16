import { DataTable } from './index';

export const DataTablePrimary = () => 
    <div className="dark flex w-full h-full">
        <DataTable
            name={"dt-products"}
            items={[
                {
                    name: 'Zion',
                    username: 'zzzz',
                    age: '3'
                }
            ]}
            loaded={true}
            headers={[
                {
                    name: 'name',
                    label: 'Member'
                },
                {
                    name: 'username',
                    label: 'Username'
                },
                {
                    name: 'age',
                    label: 'Age'
                }
            ]}
            resizable={true}
        />
    </div>