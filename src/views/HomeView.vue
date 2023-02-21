<template>
  <div>
    <div v-if="message">
      <div class="alert alert-primary" role="alert" @click="!message">
        Create Success
      </div>
    </div>
    <div v-if="dmessage">
      <div class="alert alert-primary" role="alert" @click="!dmessage">
        Delete Success
      </div>
    </div>
    <div class="d-flex justify-content-between px-5">
      <button class="btn" @click="goStatus()">go to status</button>
      <button class="btn" @click="goLogin()">go to login</button>
    </div>
    <div class="row">
      <div class=" col-11 offset-1 mt-4">
        <div class="row text-lg-start">
          <div class="col-4 ">
            <div class=" border p-3 rounded">
              <h4>Add New Job</h4>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Name</label>
                <input type="text" placeholder="enter Name " class=" form-control" v-model="name">
              </div>
              <div class=" text-end">
                <button class=" btn btn-dark" @click="create()">Add Name</button>
              </div>
            </div>
          </div>
          <div class="col-7 border p-3 ms-2 rounded">
            <div class="row ">
              <div class=" d-flex justify-content-between mb-3">
                <h5 class=" ">Job List</h5>
                <div>
                  <input type="text" name="" id="" class=" form-control" placeholder=" Search">
                </div>
              </div>
            </div>
            <div class="">
              <table class="table text-center">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(list,index) in data" :key="index">
                    <td>{{list.name}}</td>
                    <td>
                      <!-- <button class="btn btn-info me-2" >View and Edit</button> -->
                      <!-- Button trigger modal -->
                      <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="edit(list.id)">
                        View & Edit
                      </button>

                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Job</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <div class=" text-start p-3">
                                <div class="mb-3">
                                  <label for="exampleFormControlTextarea1" class="form-label">Name</label>
                                  <input type="text" placeholder="enter Name " class=" form-control" v-model="editData.name">
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary" @click="update(list.id)">Change </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button class="btn btn-danger" @click="deleteAction(list.id)">Delete</button>
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
</template>

<script src="../js/home.js"></script>


