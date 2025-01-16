import { DataTable } from './main'

function App() {
  return (
    <>
    <h1>Vite + React</h1>
    <div className="card">
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
    </>
  )
}

export default App
