## Make a Docker image and run it as a container

##### 1. Application directory structure

<img src="assets/image-20230715124853698.png" alt="image-20230715125418461" style="zoom:50%;" />



##### 2. Build a Docker image

run the command below:

```
docker build --tag grade-docker .
```

part of the output:

<img src="assets/image-20230715125418461.png" alt="image-20230715125418461" style="zoom:50%;" />

<img src="assets/image-20230715125824080.png" alt="image-20230715125824080" style="zoom:50%;" />



##### 3. Run an image as a container

###### i. Check available images by running:

```
docker images
```

Output:

<img src="assets/image-20230715130247437.png" alt="image-20230715130247437" style="zoom:50%;" />



###### ii. Run the image by executing command below

```
docker run -d -p 5000:5000 grade-docker
```

Output:

<img src="assets/image-20230715130716660.png" alt="image-20230715130716660" style="zoom:50%;" />



###### iii. Check running containers

```
docker ps -a
```

Output:

![image-20230715131403652](assets/image-20230715131403652.png)



###### iv. On the laptop, connect to `http://<pi-ip-address>:5000`

![image-20230715132000013](assets/image-20230715132000013.png)