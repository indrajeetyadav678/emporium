"""
URL configuration for project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('Customer.urls')),
    path('admin2/',include('Admin.urls')),
    path('Cart/',include('Cart.urls')),
    path('Order/',include('Order.urls')),
    path('Payment/',include('Payment.urls')),
    path('Product/',include('Product.urls')),
    path('Tracking/',include('Tracking.urls')),
    path('Reviews/',include('Reviews.urls')),
]
