/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import router from './router';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { components } from 'aws-amplify-vue'; 

Vue.config.productionTip = false

Amplify.configure(aws_exports)

const dict = {
  'ja': {
    'User already exists': "既に登録されています",
    'User does not exist.': "ユーザー名またはパスワードが正しくありません",
    'User is not confirmed.': "このユーザーはまだ確認されていません",
    'Incorrect username or password.': "ユーザー名またはパスワードが正しくありません",
    'Attempt limit exceeded, please try after some time.': "しばらく待ってからやり直してください",
    'Password did not conform with policy: Password not long enough': "パスワードが短すぎます",
    'Invalid verification code provided, please try again.': "コードが正しくありません",
    'Invalid session for the user, session is expired.': "セッションが無効です",
    'Password attempts exceeded': "パスワードを一定回数以上間違えたため、アカウントを無効にしました",
    'Account recovery requires verified contact information': "アカウントを復旧するには連絡先の確認が必要です",
    'Cannot reset password for the user as there is no registered/verified email or phone_number': "このユーザーは確認されていないため、パスワードをリセットできません",
    'Back to Sign In': "サインイン画面へ戻る",
    'Change Password': "パスワード変更",
    'Change': "変更",
    'Code': "確認コード",
    'Code cannot be empty': "コードを入力してください",
    'Confirmation Code': "確認コード",
    'Confirm a Code': "コードを確認する",
    'Confirm Sign In': "確認",
    'Confirm Sign Up': "サインアップ",
    'Confirm': "確認",
    'Create account': "アカウントを作成する",
    'Email': "メールアドレス",
    'Enter your username': "ユーザー名を入力してください",
    'Enter your password': "パスワードを入力してください",
    'Forgot Password': "パスワードをお忘れの場合",
    'Forget your password? ': "パスワードをお忘れの場合",
    'Have an account? ': "アカウントをお持ちの場合",
    'Loading...': "ロード中...",
    'Lost your code? ': "コードが見当たらない場合",
    'New Password': "新しいパスワード",
    'No account? ': "アカウントをお持ちでない場合",
    'No MFA': "MFAなし",
    'Password': "パスワード",
    'Password cannot be empty': "パスワードを入力してください",
    'Phone Number': "電話番号",
    'Pick a File': "ファイルを選択する",
    'Resend a Code': "確認コードを再送する",
    'Resend Code': "確認コードを再送する",
    'Reset password': "パスワードをリセットする",
    'Reset your password': "パスワードをリセットする",
    'Send Code': "確認コードを送信する",
    'Select MFA Type': "MFAタイプの選択",
    'Select your preferred MFA Type': "MFAタイプを選択してください",
    'Sign In Account': "サインイン",
    'Sign In': "サインイン",
    'Sign Out': "サインアウト",
    'Sign Up Account': "サインアップ",
    'Sign Up': "サインアップ",
    'Skip': "スキップする",
    'Submit': "保存",
    'Username': "ユーザー名",
    'Verify Contact': "確認",
    'Verify': "確認する"
   },
   'zh-CN': {
    'User already exists': "用户已登录",
    'User does not exist.': "用户名或密码不正确",
    'User is not confirmed.': "这个用户未确认",
    'Incorrect username or password.': "用户名或密码不正确",
    'Attempt limit exceeded, please try after some time.': "尝试次数超过限制，请稍后再试",
    'Password did not conform with policy: Password not long enough': "密码过短，请重新输入",
    'Invalid verification code provided, please try again.': "验证码错误，请重试",
    'Invalid session for the user, session is expired.': "会话已过期",
    'Password attempts exceeded': "输入密码次数超过限制",
    'Account recovery requires verified contact information': "恢复账户需要确认联系方式",
    'Cannot reset password for the user as there is no registered/verified email or phone_number': "用户未注册或没有验证电子邮件/手机号，不能重置密码",
    'Back to Sign In': "返回到登录画面",
    'Change Password': "更改密码",
    'Change': "修改",
    'Code': "确认码",
    'Code cannot be empty': "请输入验证码",
    'Confirmation Code': "确认验证码",
    'Confirm a Code': "确认验证码",
    'Confirm Sign In': "确认登录",
    'Confirm Sign Up': "确认注册",
    'Confirm': "确认",
    'Create account': "新建账户",
    'Email': "电子邮件",
    'Enter your username': "请输入用户名",
    'Enter your password': "请输入密码",
    'Forgot Password': "忘记密码",
    'Forget your password? ': "忘记了密码？",
    'Have an account? ': "已有账号？",
    'Loading...': "登录中...",
    'Lost your code? ': "未收到验证码？",
    'New Password': "新密码",
    'No account? ': "没有账号？",
    'No MFA': "没有MFA",
    'Password': "密码",
    'Password cannot be empty': "请输入密码",
    'Phone Number': "电话号码",
    'Pick a File': "选择文件",
    'Resend a Code': "重新发送验证码",
    'Resend Code': "重新发送验证码",
    'Reset password': "重置密码",
    'Reset your password': "重置密码",
    'Send Code': "发送验证码",
    'Select MFA Type': "选择MFA类型",
    'Select your preferred MFA Type': "选择MFA类型",
    'Sign In Account': "登录账户",
    'Sign In': "登录",
    'Sign Out': "退出",
    'Sign Up Account': "注册账号",
    'Sign Up': "注册",
    'Skip': "跳过",
    'Submit': "保存",
    'Username': "用户名",
    'Verify Contact': "验证链接",
    'Verify': "验证"
   }
};

Vue.prototype.$Amplify.I18n.putVocabularies(dict);
Vue.prototype.$Amplify.I18n.setLanguage('zh-CN');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { 
    App,
    ...components
  }
})
