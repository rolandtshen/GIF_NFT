import imageio.v2 as imageio
images = []
filenames = []
for i in range(0,7):
    filenames.append(str(i)+".png")
for i in range(1,250):
    for filename in filenames:
        images.append(imageio.imread("build/images/"+str(i)+"/"+filename))
    imageio.mimsave('finalGIFs/'+str(i)+'.gif', images,duration = 0.000001)
    print('Generated ' + str(i))
    images.clear()