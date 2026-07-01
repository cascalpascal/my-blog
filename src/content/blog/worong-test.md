---
title: "📕 [Python] Call by Value vs Call by Reference 실수를 조심하자"
pubDate: 2026-07-01
description: "파이썬 가변 객체 변경 시 발생했던 스코프 오류 복기"
tags: ["오답"]
---

# 내가 틀린 이유
파이썬에서 리스트(`list`)를 함수의 인자로 넘길 때, 함수 내부에서 원소를 변경하면 원본 객체도 같이 변한다는 점을 간과했다.

```python
def modify_list(lst):
    lst.append(4) # 원본 변함!