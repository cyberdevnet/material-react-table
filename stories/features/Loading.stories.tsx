import React from 'react';
import { Meta, Story } from '@storybook/react';
import MaterialReactTable, { MaterialReactTableProps } from '../../src';
import faker from '@faker-js/faker';

const meta: Meta = {
  title: 'Features/Loading Examples',
  parameters: {
    status: {
      type: 'stable',
    },
  },
};

export default meta;

const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName' as const,
  },
  {
    Header: 'Last Name',
    accessor: 'lastName' as const,
  },
  {
    Header: 'Address',
    accessor: 'address' as const,
  },
  {
    Header: 'State',
    accessor: 'state' as const,
  },
  {
    Header: 'Phone Number',
    accessor: 'phoneNumber' as const,
  },
];

const data = [...Array(100)].map((_) => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  address: faker.address.streetAddress(),
  state: faker.address.state(),
  phoneNumber: faker.phone.phoneNumber(),
}));

export const LoadingExample: Story<MaterialReactTableProps> = () => (
  <MaterialReactTable columns={columns} data={[]} isLoading />
);

export const ReloadingExample: Story<MaterialReactTableProps> = () => (
  <MaterialReactTable columns={columns} data={data} isFetching />
);
