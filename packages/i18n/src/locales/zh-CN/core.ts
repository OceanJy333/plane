/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

export default {
  sidebar: {
    projects: "项目",
    pages: "页面",
    new_work_item: "新工作项",
    home: "首页",
    your_work: "我的工作",
    inbox: "收件箱",
    workspace: "工作区",
    views: "视图",
    analytics: "分析",
    work_items: "工作项",
    cycles: "周期",
    modules: "模块",
    intake: "收集",
    drafts: "草稿",
    favorites: "收藏",
    pro: "专业版",
    upgrade: "升级",
  },

  auth: {
    common: {
      email: {
        label: "邮箱",
        placeholder: "name@company.com",
        errors: {
          required: "邮箱为必填项",
          invalid: "邮箱格式无效",
        },
      },
      password: {
        label: "密码",
        set_password: "设置密码",
        placeholder: "输入密码",
        confirm_password: {
          label: "确认密码",
          placeholder: "确认密码",
        },
        current_password: {
          label: "当前密码",
        },
        new_password: {
          label: "新密码",
          placeholder: "输入新密码",
        },
        change_password: {
          label: {
            default: "更改密码",
            submitting: "更改密码中",
          },
        },
        errors: {
          match: "两次密码输入不一致",
          empty: "请输入您的密码",
          length: "密码长度应超过 8 个字符",
          strength: {
            weak: "密码强度较弱",
            strong: "密码强度较强",
          },
        },
        submit: "设置密码",
        toast: {
          change_password: {
            success: {
              title: "成功！",
              message: "密码更改成功。",
            },
            error: {
              title: "错误！",
              message: "出现问题，请重试。",
            },
          },
        },
      },
      unique_code: {
        label: "唯一验证码",
        placeholder: "123456",
        paste_code: "粘贴发送到您邮箱的验证码",
        requesting_new_code: "正在请求新验证码",
        sending_code: "发送验证码中",
      },
      already_have_an_account: "已有账户？",
      login: "登录",
      create_account: "创建账户",
      new_to_plane: "初次使用 Plane？",
      back_to_sign_in: "返回登录",
      resend_in: "{seconds} 秒后重新发送",
      sign_in_with_unique_code: "使用唯一验证码登录",
      forgot_password: "忘记密码？",
    },
    sign_up: {
      header: {
        label: "创建账户，与您的团队一起开始管理工作。",
        step: {
          email: {
            header: "注册",
            sub_header: "",
          },
          password: {
            header: "注册",
            sub_header: "使用邮箱和密码组合注册。",
          },
          unique_code: {
            header: "注册",
            sub_header: "使用发送到上方邮箱地址的唯一验证码注册。",
          },
        },
      },
      errors: {
        password: {
          strength: "请设置强密码以继续",
        },
      },
    },
    sign_in: {
      header: {
        label: "登录，与您的团队一起开始管理工作。",
        step: {
          email: {
            header: "登录或注册",
            sub_header: "",
          },
          password: {
            header: "登录或注册",
            sub_header: "使用邮箱和密码组合登录。",
          },
          unique_code: {
            header: "登录或注册",
            sub_header: "使用发送到上方邮箱地址的唯一验证码登录。",
          },
        },
      },
    },
    forgot_password: {
      title: "重置密码",
      description: "输入您账户的已验证邮箱地址，我们将向您发送密码重置链接。",
      email_sent: "我们已将重置链接发送到您的邮箱",
      send_reset_link: "发送重置链接",
      errors: {
        smtp_not_enabled: "您的管理员未启用 SMTP，无法发送密码重置链接",
      },
      toast: {
        success: {
          title: "邮件已发送",
          message: "请检查您的收件箱，查找重置密码的链接。如果几分钟内未收到，请检查垃圾邮件文件夹。",
        },
        error: {
          title: "错误！",
          message: "出现问题，请重试。",
        },
      },
    },
    reset_password: {
      title: "设置新密码",
      description: "使用强密码保护您的账户",
    },
    set_password: {
      title: "保护您的账户",
      description: "设置密码有助于安全登录",
    },
    sign_out: {
      toast: {
        error: {
          title: "错误！",
          message: "退出登录失败，请重试。",
        },
      },
    },
  },
} as const;
