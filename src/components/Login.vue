<template>
    <div class="sign">
        <div class="section">
                <div class="form-item">
                    <h2>登录</h2>
                </div>
                <div class="form-item"><i class="icon-user-md icon"></i>
                    <input v-model="params.name" type="text" class="form-input" name="name" placeholder="昵称">
                    <div class="bot-bar"></div>

                </div>
                <div class="form-item"><i class="icon-envelope icon"></i>
                    <input v-model="params.password"  type="password" class="form-input" name="password" placeholder="请输入密码">
                    <div class="bot-bar"></div>

                </div>
                <div class="form-item">
                    <div  class="form-submit" data-txt="登录" @click="next"> 登录 </div>
                </div>
        </div>
    </div>

</template>

<script>
import { Api } from "api";
export default {
  data() {
    return {
      params: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    next() {
      Api.login(this.params).then(res => {
        if (res.data.code == "00") {
          if (this.$route.query.returnUrl) {
            location.href = this.$route.query.returnUrl;
          } else {
            this.$router.push({ name: "memberCenter" });
          }
        }
      });
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  html {
    font-size: 30px !important;
  }
}

@media screen and (max-width: 420px) {
  html {
    font-size: 19px !important;
  }
}

@media screen and (max-width: 400px) {
  html {
    font-size: 18px !important;
  }
}

@media screen and (max-width: 320px) {
  html {
    font-size: 15px !important;
  }
}

body {
  padding: 0px;
  margin: 0px;
}

ul,
li,
a {
  padding: 0px;
  margin: 0px;
  list-style: none;
}

body {
  background-color: #fdfdfd !important;
  font-family: -apple-system, ".SFNSText-Regular", "Helvetica Neue",
    "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft Yahei", sans-serif;
}

.sign {
  max-width: 20rem;
  min-width: 15rem;
  margin: 2.4rem auto;
  color: #333;
}

.sign .section {
  background-color: #fff;
  border: 1px solid #ececec;
  border-radius: 2px;
  padding: 2rem 2.5rem;
}

.sign .section.form {
  width: 100%;
  height: 15rem;
}

.form-item {
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ececec;
}

.form-item:first-child {
  margin-bottom: 1rem;
}

.form-item:last-child {
  border: none;
}

.form-item input {
  margin: 0.5rem 0.4rem;
  font-size: 0.73rem;
  border: none;
  outline: none;
  box-shadow: none;
  -webkit-box-shadow: none;
  width: calc(100% - 70px);
}

.form-item .bot-bar {
  position: relative;
  height: 1px;
  width: 100%;
}

.bot-bar:before {
  position: absolute;
  bottom: -1px;
  left: 50%;
  content: "";
  height: 1px;
  width: 0px;
  background-color: #1b76c5;
  box-shadow: 1px 1px 3px rgba(255, 255, 255, 0.3);
  transition: width ease-in-out 0.35s;
  -moz-transition: width ease-in-out 0.35s;
  -o-transition: width ease-in-out 0.35s;
  -webkit-transition: width ease-in-out 0.35s;
}

.bot-bar:after {
  position: absolute;
  bottom: -1px;
  right: 50%;
  content: "";
  height: 1px;
  width: 0px;
  background-color: #1b76c5;
  transition: width ease-in-out 0.35s;
  -moz-transition: width ease-in-out 0.35s;
  -o-transition: width ease-in-out 0.35s;
  -webkit-transition: width ease-in-out 0.35s;
}

.form-item h2 {
  text-align: center;
  color: #5474db;
}

.form-item input:focus ~ .bot-bar:before {
  width: 50%;
}

.form-item input:focus ~ .bot-bar:after {
  width: 50%;
}

.form-item .icon {
  margin: 0.5rem 0.5rem;
  color: #5474db;
}

.form-item .info {
  color: red;
  position: absolute;
  right: 0px;
  font-size: 0.71rem;
}

.form-submit {
  position: relative;
  text-align: center;
  background-color: #617fde;
  border-radius: 5px;
  overflow: hidden;
  padding: 0.3rem;
  color: aliceblue;
  letter-spacing: 0.1rem;
  cursor: pointer;
  line-height: 1.6rem;
  font-size: 0.7rem;
  height: 1.6rem;
  transition: all ease-in-out 0.35s;
  -moz-transition: all ease-in-out 0.35s;
  -o-transition: all ease-in-out 0.35s;
  -webkit-transition: all ease-in-out 0.35s;
}

.form-submit:hover {
  font-size: 0.9rem;
  background-color: #5474db;
}

.icon-mobile-phone:before {
  font-size: 2rem;
}

.icon-user-md:before {
  font-size: 1.2rem;
}

.form-submit:before {
  font-size: 0.9rem;
  position: absolute;
  top: 0px;
  left: 0px;
  content: attr(data-txt);
  background-color: #617fde;
  width: 100%;
  line-height: 2.2rem;
  letter-spacing: 0.1rem;
  overflow: hidden;
  text-align: center;
  height: 1.1rem;
  transition: top ease-in-out 0.35s;
  -moz-transition: top ease-in-out 0.35s;
  -o-transition: top ease-in-out 0.35s;
  -webkit-transition: top ease-in-out 0.35s;
}

.form-submit:hover:before {
  top: -1.1rem;
}

.form-submit:after {
  font-size: 0.9rem;
  position: absolute;
  bottom: 0px;
  left: 0px;
  content: attr(data-txt);
  background-color: #617fde;
  width: 100%;
  line-height: 1px;
  letter-spacing: 0.1rem;
  overflow: hidden;
  text-align: center;
  height: 1.1rem;
  transition: bottom ease-in-out 0.35s;
  -moz-transition: bottom ease-in-out 0.35s;
  -o-transition: bottom ease-in-out 0.35s;
  -webkit-transition: bottom ease-in-out 0.35s;
}

.form-submit:hover:after {
  bottom: -1.1rem;
}
</style>