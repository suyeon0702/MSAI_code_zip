# 2-2 영상 파일을 읽고 윈도우에 디스플레이 하기
import cv2 as cv
import sys

img = cv.imread('./source/ch2/soccer.jpg') # 영상 읽기

if img is None:
    sys.exit('파일을 찾을 수 없습니다.')

cv.imshow('Image Display', img) # 윈도우에 영상 표시

cv.waitKey()
cv.destroyAllWindows()

'''
# image resize
import os
image_path = "C:\Users\USER\Desktop\Lab\MSAI_code\OpenCV\source\ch2\soccer.jpg"
if not os.path.exists(image_path):
    print("File does not exist. Check the path:", image_path)
else:
    img = cv.imread(image_path)
    if img is None:
        print("Could not read the image.")
    else:
        resized_img = cv.resize(img, (400, 300), interpolation=cv.INTER_LINEAR) # Default
        cv.imshow("Image Display", resized_img)
        print("Image loaded successfully!")
        cv.waitKey(0)
        cv.destroyAllWindows()
'''