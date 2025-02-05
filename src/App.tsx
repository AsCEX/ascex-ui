import { DataTable } from './main'
import {DateRangePickerPresetsExample} from "../example/DateRangePickerSample.tsx";
import { Button } from './Button/Button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./Dialog/Dialog";

function App() {

  return (
    <>
        <div className="card flex flex-col h-screen w-full bg-red-400">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="secondary">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle>Account Created Successfully</DialogTitle>
                        <DialogDescription className="mt-1 text-sm leading-6">
                            Your account has been created successfully. You can now login to
                            your account. For more information, please contact us.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="mt-6">
                        <DialogClose asChild>
                            <Button
                                className="mt-2 w-full sm:mt-0 sm:w-fit"
                                variant="secondary"
                            >
                                Go back
                            </Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button className="w-full sm:w-fit">Ok, got it!</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <DateRangePickerPresetsExample />
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
