<template>
  <div>
    <div v-if="message">
      <div class="alert alert-primary" role="alert">
        Login Success <button @click="goHome()" class="btn btn-info">Go</button>
      </div>
    </div>
    <div class="row">
      <div class=" d-flex justify-content-center align-items-center ">
        <div class=" text-start border p-3 px-4 mt-5 rounded">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="user.email">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Password</label><br>
            <input type="password" name="" id="" class=" form-control" placeholder="enter password" v-model="user.password">
          </div>
          <button class=" btn btn-dark float-end" @click="loginAction()">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/login.js"></script>
