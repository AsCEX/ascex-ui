import { DataTable } from './main'

function App() {
  return (
    <>
    <div className="card flex flex-col h-screen w-full bg-red-400">
      <DataTable
          name={"dt-products"}
          items={[
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3',
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
              {
                  name: 'Zion',
                  username: 'zzzz',
                  age: '3'
              },
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
                  label: 'Member',
                  freeze: true
              },
              {
                  name: 'username',
                  label: 'Username',
                  freeze: true
              },
              {
                  name: 'age',
                  label: 'Age'
              },
              {
                  name: 'name',
                  label: 'Member',
              },
              {
                  name: 'username',
                  label: 'Username',
              },
              {
                  name: 'age',
                  label: 'Age'
              },
              {
                  name: 'age',
                  label: 'Age'
              },
              {
                  name: 'name',
                  label: 'Member',
              },
              {
                  name: 'username',
                  label: 'Username',
              },
              {
                  name: 'action',
                  label: 'Action',
                  type:  'custom',
                  render: () => {
                      return <>AsCEX</>
                  }
              }
          ]}
          options={{
              resizable: true
          }}
      />
    </div>
    </>
  )
}

export default App
