# 记一次实验室电脑中挖矿病毒的经历

2024/12/06，作者：YuiCtwo

## 经过
实验室采购的新电脑，接手的时候账号名密码都贼简单，刚好最近有比赛就没咋管，想着开在学校内网下比较安全，结果某个下午正在写代码，突然电脑风扇狂转，32 核 CPU 给我每个都跑到 100%，心里一凉，看来是中挖矿病毒了。

`top` 查看进程

![](/life/YuiCtwo/top.png)

这里这个没有啥实际含义名字的进程，伪装做的不太行啊，演都不演了，该杀！

`sudo kill -9 5571` 强制杀进程。 风扇停了一阵子，但过会又开始响了。果断重置密码并关机，但开机后还是 CPU 跑满的状态。估摸着是有守护进程，还设置了开机自启动。

先把网断了，过了会 CPU 就不响了，但进程还在。

先查看 cron 定时任务
`cat /var/log/syslog | grep CRON`

![](/life/YuiCtwo/cron.png)

看到 17 点 45 分的时候启动了一个类似命令在 `/dev/shm/.cache` 下，但最终没找到，可能和重启有关系？
`crontab -l` 也找不到命令，应该是没有依赖 cron 来实现无法杀进程的效果。

看眼 `/var/log/auth.log` 发现 17 点 45 分钟的时候疑似有 ssh 登录，还把 sshd 的服务 /etc/systemd/system/auto_script.service 给执行了 chmod 改了权限，估计是确保可以重启的时候 sshd 被开启。
看来是电脑只要接入校园网就会被攻击，恰巧是新电脑初始化密码没有重置，导致被直接攻破，被走 SSH 安装了挖矿脚步和程序。

查看进程状态来找守护进程（服务）

`systemctl status 5571`
![](/life/YuiCtwo/systemctl.png)
大大的一个 custom system service，顺便也显示了守护进程的 PID 是 1073，叫 "system"。
复盘的时候 搜了下 [CGroup](https://zhuanlan.zhihu.com/p/538496131)，是一个类似于资源管理的东西，就可以看做下面这些命令都会一并执行。

先给服务关掉 `systemctl stop system.service`
找到目录 service 以及 bin 内的命令，不得不说起的名字有点混淆性。
找到 `/etc/systemd/system/system.service` 文件
里面也指向了一个执行的命令 `/usr/bin/system/system` 

在 `/usr/bin/system` 下找到叫 `xmrig`，一搜果然就是 挖矿病毒，顺便还遇到了相似经历的老哥
https://blog.csdn.net/weixin_43659244/article/details/139478036

把这个目录删掉 `rm -rf /usr/bin/system`
跟据上面老哥说的，把攻击的 IP 加入黑名单

怕删不干净，再执行 find 命令 `find / -name xmrig`（locate竟然还找不到）把找到的全部删掉。

最后安装下 [clamav](https://blog.csdn.net/qingzhiwu0110/article/details/109861948)，用 clamav 杀下毒，确保没有文件残留。

## 总结

新机子一定要自己设置 root 账号以及修改默认账号的密码，我怀疑原本 root 就没密码让人家 ssh 登上了。同时密码设置的不要太简单，防止被暴力攻破。
