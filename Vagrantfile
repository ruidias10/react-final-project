boxes = [
    {
        :name => "React-App",
        :eth1 => "192.168.118.30",
        :mem => "512",
        :cpu => "1",
        :local_path => "www",
        :remote_path => "/vagrant/www",
        :config_local_path => "provision/config",
        :config_remote_path => "/vagrant/config",
        :nginx_local_path => "nginx",
        :nginx_remote_path => "/var/www/html"
    },
]

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.provider "virtualbox" do |v, override|
    override.vm.box = "ubuntu/bionic64"
  end

  boxes.each do |opts|
    config.vm.define opts[:name] do |config|
      config.vm.hostname = opts[:name]
      config.vm.network "forwarded_port", guest: 8080, host: 8080 #nginx
      config.vm.network "forwarded_port", guest: 3001, host: 3001 #node API
      config.vm.network "forwarded_port", guest: 6379, host: 6379 #redis
      config.vm.network "forwarded_port", guest: 27017, host: 27017 #mongodb
      
      config.vm.synced_folder "./", "/vagrant", disabled: true
      config.vm.synced_folder opts[:local_path], opts[:remote_path]
      config.vm.synced_folder opts[:config_local_path], opts[:config_remote_path]
      config.vm.synced_folder opts[:nginx_local_path], opts[:nginx_remote_path], group: "www-data", mount_options: ['dmode=777','fmode=777']

      config.vm.provider "virtualbox" do |v|
        v.customize ["modifyvm", :id, "--memory", opts[:mem]]
        v.customize ["modifyvm", :id, "--cpus", opts[:cpu]]
      end

      config.vm.network :private_network, ip: opts[:eth1]
      config.vm.provision :shell, type: "shell", path: "provision/setup.sh"
    end
  end

end
