<template>
  <div>
    <div class="row">
      <div class="row">
        <button class="btn" @click="homePage()">go to home</button>
      </div>

      <div class=" col-11 offset-1 mx-auto mt-4">
        <div class="row text-lg-start">
          <div class="col-3 ">
            <div class=" border p-3 rounded">
              <h4>Add New Status</h4>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Name</label>
                <input type="text" placeholder="enter Name " class=" form-control">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Email</label>
                <input type="email" placeholder="enter email " class=" form-control">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">password</label>
                <input type="password" placeholder="enter password " class=" form-control">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">phone</label>
                <input type="number" placeholder="enter phone " class=" form-control">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">address</label>
                <textarea name="" id="" cols="30" rows="3" class=" form-control" placeholder="enter address"></textarea>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">nrc-number</label>
                <input type="text" placeholder="enter nrc " class=" form-control">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">remark</label>
                <textarea name="" id="" cols="30" rows="3" class=" form-control" placeholder="remark"></textarea>
              </div>
              <div class=" text-end">
                <button class=" btn btn-dark">Add Status</button>
              </div>
            </div>
          </div>
          <div class="col-8 ">
            <div class=" border rounded p-4">
              <div class="row ">
                <div class=" d-flex justify-content-between mb-3 ">
                  <h5 class=" ">Status List</h5>
                  <div>
                    <input type="text" name="" id="" class=" form-control" placeholder=" Search">
                  </div>
                </div>
              </div>
              <div class="row">
                <table class="table text-center">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Password</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Address</th>
                      <th scope="col">nrc-number</th>
                      <th scope="col">remark</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Kg</td>
                      <td>Kg</td>
                      <td>Kg</td>
                      <td>Kg</td>
                      <td>Kg</td>
                      <td>Kg</td>
                      <td>Kg</td>
                      <td class=" d-flex justify-content-center">
                        <!-- <button class="btn btn-info me-2">View and Edit</button> -->
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          View & Edit
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <div class=" p-3 text-start">
                                  <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Name</label>
                                    <input type="text" placeholder="enter Name " class=" form-control">
                                  </div>
                                  <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Email</label>
                                    <input type="email" placeholder="enter email " class=" form-control">
                                  </div>
                                  <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">password</label>
                                    <input type="password" placeholder="enter password " class=" form-control">
                                  </div>
                                  <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">phone</label>
                                    <input type="number" placeholder="enter phone " class=" form-control">
                                  </div>
                                  <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">address</label>
                                    <textarea name="" id="" cols="30" rows="3" class=" form-control" placeholder="enter address"></textarea>
                                  </div>
                                  <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">nrc-number</label>
                                    <input type="text" placeholder="enter nrc " class=" form-control">
                                  </div>
                                  <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">remark</label>
                                    <textarea name="" id="" cols="30" rows="3" class=" form-control" placeholder="remark"></textarea>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">changes</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button class="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/status.js"></script>