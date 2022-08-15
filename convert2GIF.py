import imageio
images = []
filenames = []
for i in range(0,7):
    filenames.append(str(i)+".png")
for i in range(1,40):
    for filename in filenames:
        images.append(imageio.imread("build/images/"+str(i)+"/"+filename))
    imageio.mimsave('finalGIFs/'+str(i)+'.gif', images,duration = 0.0001)
    images.clear()