import React from 'react';
import Layout from '../Layout';

const InputReview = () => {
    return (
        <Layout>
            <div class='grid grid-cols-4'>
                <div class='col-span-3'>
                    <div class='ml-5 mt-10 mb-2 flex flex-row'>
                        <img src='/src/assets/images/icons/UserList.png' />
                        <h1 class='ml-5 mt-2 text-xl font-semibold'>Ulasan Review</h1>
                    </div>
                    <div class="m-5 rounded overflow-hidden shadow-lg bg-grey-400">
                        <div class="px-6 py-4">
                            <form>
                                <div class='flex flex-row my-6'>
                                    <label class='basis-1/3 block text-sm font-medium leading-6 text-gray-900 md:text-left'>Kategori</label>
                                    <select class='basis-2/3 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' required>
                                        <option selected disabled>Kategori</option>
                                        <option>Barbershop</option>
                                        <option>Salon</option>
                                    </select>
                                </div>
                                <div class='flex flex-row my-6'>
                                    <label class='basis-1/3 block text-sm font-medium leading-6 text-gray-900 md:text-left'>Nama Tempat</label>
                                    <div class='flex flex-wrap basis-2/3'>
                                        <select class='mr-1 w-68 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' required>
                                            <option selected disabled>Pilih Nama Tempat</option>
                                        </select>
                                        <img class='mx-2' src='/src/assets/images/icons/MapPinLine.png' />
                                        <select class='w-64 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' required>
                                            <option selected disabled>Lokasi</option>
                                        </select>
                                    </div>
                                </div>
                                <div class='flex flex-roy my-6'>
                                    <label class='w-1/3 block text-sm font-medium leading-6 text-gray-900'>Beri nilai ulasan</label>
                                    <select class='w-2/3 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                                        <option selected disabled>Pilih Nilai Rating</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div class='flex flex-row my-6'>
                                    <label class='block text-sm font-medium leading-6 text-gray-900 basis-1/3'>Foto</label>
                                    <input type='file' name='banner' id='banner' className='border basis-2/3' />
                                </div>
                                <div class='flex flex-row my-6'>
                                    <label class='basis-1/3'>Ulasan Pengguna</label>
                                    <textarea rows='6' class='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-2/3' placeholder='Deskripsi'></textarea>
                                </div>
                                <div class='flex justify-end mr-10 mt-10'>
                                    <button class='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-5 rounded shadow-lg' onSubmit={() => handleClick()}>Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="m-5 mt-2 rounded overflow-hidden shadow-lg">
                    <h1 class='mt-5 ml-5 text-xl font-semibold underline'>Ulasan Terbaru</h1>
                    <div class='mt-10 ml-5 flex flex-row'>
                        <img src='/src/assets/images/icons/AvatarEllipse1.png' />
                        <div>
                            <h4 class='ml-2 font-semibold'>Putri L.</h4>
                            <div class='ml-3 border flex flex-row'>
                                <img class='h-3 my-auto' src='/src/assets/images/icons/Star.png'/>
                                <h6 class='mx-auto text-xs'>5.0</h6>
                            </div>
                        </div>
                    </div>
                    <h6 class='ml-6 my-3 text-xs text-gray-500'>2 minggu yang lalu</h6>
                    <p class='text-xs ml-6 mr-3'>Pelayanan ramah, harga terjangkau tapi bisa dapatin model rambut yang keren bangettt</p>
                    <div class='mt-10 ml-5 flex flex-row'>
                        <img src='/src/assets/images/icons/AvatarEllipse1.png' />
                        <div>
                            <h4 class='ml-2 font-semibold'>Putri L.</h4>
                            <div class='ml-3 border flex flex-row'>
                                <img class='h-3 my-auto' src='/src/assets/images/icons/Star.png'/>
                                <h6 class='mx-auto text-xs'>5.0</h6>
                            </div>
                        </div>
                    </div>
                    <h6 class='ml-6 my-3 text-xs text-gray-500'>2 minggu yang lalu</h6>
                    <p class='text-xs ml-6 mr-3'>Pelayanan ramah, harga terjangkau tapi bisa dapatin model rambut yang keren bangettt</p>
                    <div class='mt-10 ml-5 flex flex-row'>
                        <img src='/src/assets/images/icons/AvatarEllipse1.png' />
                        <div>
                            <h4 class='ml-2 font-semibold'>Putri L.</h4>
                            <div class='ml-3 border flex flex-row'>
                                <img class='h-3 my-auto' src='/src/assets/images/icons/Star.png'/>
                                <h6 class='mx-auto text-xs'>5.0</h6>
                            </div>
                        </div>
                    </div>
                    <h6 class='ml-6 my-3 text-xs text-gray-500'>2 minggu yang lalu</h6>
                    <p class='text-xs ml-6 mr-3'>Pelayanan ramah, harga terjangkau tapi bisa dapatin model rambut yang keren bangettt</p>
                </div>
            </div>
        </Layout>
    );
};

export default InputReview;