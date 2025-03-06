# 빨간색 붓과 파란색 붓으로 페인팅하기
import cv2 as cv
import sys

img = cv.imread("source\ch2\soccer.jpg")

if img is None:
    sys.exit('파일을 찾을 수 없습니다.')

BrushSiz = 5    # 붓의 크기
LColor, RColor = (255,0,0), (0,0,255) # 파란색, 빨간색

def painting(event, x, y, flags, param):
    if event == cv.EVENT_LBUTTONDOWN:
        cv.circle(img, (x,y), BrushSiz, LColor, -1)
    elif event == cv.EVENT_RBUTTONDOWN:
        cv.circle(img, (x,y), BrushSiz, RColor, -1)