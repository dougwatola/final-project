#import requirements
import pandas as pd

from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt

#import csv file into dataframe
walking_df = pd.read_csv("running1.csv")

X = walking_df['ACCELEROMETER X (m/s²)']
#list(X)
Y = walking_df['ACCELEROMETER Y (m/s²)']
Z = walking_df['ACCELEROMETER Z (m/s²)']

grav_x = walking_df['GRAVITY X (m/s²)']
grav_y = walking_df['GRAVITY Y (m/s²)']
grav_z = walking_df['GRAVITY Z (m/s²)']

lin_x = walking_df['LINEAR ACCELERATION X (m/s²)']
lin_y = walking_df['LINEAR ACCELERATION Y (m/s²)']
lin_z = walking_df['LINEAR ACCELERATION Z (m/s²)']

fig = plt.figure(figsize=(14,11))
ax = fig.add_subplot(111, projection='3d')

#X = [1,2,3,4,5,6]
#Y = [5,6,2,3,11,12]
#Z = [2,3,4,5,6,7]

ax.scatter (X, Y, Z, c='r', marker = 'o', label = "Accelerometer")
ax.scatter (grav_x, grav_y, grav_z, c='b', marker = 'o', label = "Gravity")
ax.scatter (lin_x, lin_y, lin_z, c='g', marker = 'o', label = "Linear Acceleration")

ax.set_xlabel('x axis')
ax.set_ylabel('y axis')
ax.set_zlabel('z axis')
plt.title('Stairs Data')


ax.legend()
plt.show()
