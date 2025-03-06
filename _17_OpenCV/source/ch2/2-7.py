# 마우스로 클릭한 곳에 직사각형 그리기
import cv2 as cv
import sys
img = cv.imread("source\ch2\girl_laughing.jpg")

if img is None:
    sys.exit('파일을 찾을 수 없습니다.')

def draw(event, x, y, flags, param):
    if event == cv.EVENT_LBUTTONDOWN:
        cv.rectangle(img, (x,y), (x+200,y+200), (0,0,255), 2)
    elif event == cv.EVENT_RBUTTONDOWN:
        cv.rectangle(img, (x,y), (x+100,y+100), (255,0,0), 2)

    cv.imshow('Drawing', img)

cv.namedWindow('Drawing')
cv.imshow('Drawing', img)

cv.setMouseCallback('Drawing', draw) # Drawing 윈도우에 draw 콜백 함수 지정
'''
    콜백...리스너라는 개념...
    창에 마우스 입력이 딱 들어가면 draw라는 함수를 불러라!
    draw 함수의 event 파라미터가 마우스의 상세동작을 의미 -> 그래서 우클릭 좌클릭 나뉜거
'''

while(True): # 마우스 이벤트가 언제 발생할지 모르므로 무한 반복
    if cv.waitKey(1) == ord('q'):
        cv.destroyAllWindows()
        break