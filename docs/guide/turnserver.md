# Turnserver 服务器搭建

## 安装
### 安装依赖库
```shell script
yum install -y make gcc cc gcc-c++ wget
yum install -y openssl-devel libevent libevent-devel
```
### 安装coturn
```shell script
git clone https://github.com/coturn/coturn
cd coturn
./configure
make
sudo make install
cd /usr/local/etc/
cp turnserver.conf.default turnserver.conf
```

## 配置
```shell script
vim turnserver.conf


# 默认监听端口
listening-port=3478
# 外网ip
external-ip=47.110.132.92
# 用户密码
user=idc:123456
# 域名
realm=nodesh.cn
no-tls
no-dtls
# 日志
log-file=/var/tmp/turn.log
# For the security reasons, it is recommended to use the encrypted
cli-password=idc123456
# Certificate file.
cert=/usr/local/etc/turn_server_cert.pem
# Private key file.
pkey=/usr/local/etc/turn_server_pkey.pem
```

### 生成自签名证书
```shell
sudo openssl req -x509 -newkey rsa:2048 -keyout   /usr/local/etc/turn_server_pkey.pem -out /usr/local/etc/turn_server_cert.pem -days 99999 -nodes
```

## 启动

- 阿里云后台添加安全组开放 `TCP`,`UDP` `3478` 端口
- 修改防火墙策略
```shell script
iptables -A INPUT -p udp --dport 3478 -j ACCEPT
iptables -A INPUT -p udp --dport 5349 -j ACCEPT
# or
# 添加
firewall-cmd --zone=public --add-port=3478/udp --permanent
firewall-cmd --zone=public --add-port=3478/tcp --permanent
# 重新载入
firewall-cmd --reload
# 重启防火墙
systemctl restart firewalld
```

### 确保端口开放

### 启动
```shell script
turnserver -o -a -c /usr/local/etc/turnserver.conf
```
### 验证监听端口
```shell script
netstat -nat | grep LISTEN
```

## 验证
### 在线测试
[https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/)

::: tip 参考链接
[https://github.com/coturn/coturn/blob/master/INSTALL]()
:::
