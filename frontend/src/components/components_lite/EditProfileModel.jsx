import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Label } from '../ui/label'
import { Button } from '../ui/button';

const EditProfileModel = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <Dialog open={open} setOpen={setOpen} >
                <DialogContent
                    className='sm:max-w=[500px]'
                    onInteractOutside={() => setOpen(false)}
                >
                    <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                    </DialogHeader>
                    {/* Form for editing */}
                    <form>
                        <div className='grid gap-4 py-4'>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor='name' className='text-right'> Name</Label>
                                <input type="text" id='name' name='name' className='col-span-3 border border-gray-300 rounded-md p-2' />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor='email' className='text-right'> Email </Label>
                                <input type="email" id='email' name='email' className='col-span-3 border border-gray-300 rounded-md p-2' />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor='phone' className='text-right'> Phone No. </Label>
                                <input type="tel" id='phone' name='phone' className='col-span-3 border border-gray-300 rounded-md p-2' />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor='bio' className='text-right'> Bio </Label>
                                <input type="bio" id='bio' name='bio' className='col-span-3 border border-gray-300 rounded-md p-2' />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor='skills' className='text-right'> Skills </Label>
                                <input type="text" id='skills' name='skills' className='col-span-3 border border-gray-300 rounded-md p-2' />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor='file' className='text-right'> Resume </Label>
                                <input type="file" id='file' name='file' accept='.pdf' className='col-span-3 border border-gray-300 rounded-md p-2' />
                            </div>
                        </div>
                        <DialogFooter>
                            {
                                loading ? (
                                    <Button variant='primary'> Loading </Button>
                                ) : (
                                    <Button>
                                        Save
                                    </Button>
                                )
                            }
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default EditProfileModel
