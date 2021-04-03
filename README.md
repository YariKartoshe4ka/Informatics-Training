# Informatics Training


### About

Program for honing the skill of translating numbers from different number systems and knowledge of the powers of two


### Supported Operating Systems
- Android (compiled)
- Windows
- Linux
- Mac OS


### Requirements (Linux / Mac OS)

- [Python 3](https://python.org/)
- [PyWebView](https://pywebview.flowrl.com/)
- [Flask](https://flask.palletsprojects.com/)


### Installation

###### Android

To install the program on Android you should download an executable file from the latest releases and run it (for Android it ends in **.apk**)

###### Linux / Mac OS / Windows

Open terminal and run the following commands:

```sh
cd ~
wget https://github.com/YariKartoshe4ka/Informatics-Training/archive/refs/tags/1.0.0.zip
unzip 1.0.0.zip
cd Informatics-Training-1.0.0
python -m pip install -r requirements.txt
python main.py
```


### Review

###### Welcome

When you start the program, you will see a welcome window. Press **Start training** to choose your training type

###### Languages

We support these languages. You can change it by clicking on the flag in the upper-right corner. Russian is selected by default

- Russian (ru-ru)
- English (en-gb)

###### Training type

You can choose from two types of training: powers of two or number systems.

- For powers of two, you need to choose the maximum power (10, 15, or 20) and the type of answer (input field or buttons). 
- For number systems, you need to choose the base of the original number system (from 2 to 36) and the base of the answer number system (from 2 to 36). They must be different!

Then you can start training by clicking on **Start!** button

###### Training

Click on the buttons or enter the answer in the field and see if the answer is correct. The statistics are kept at the bottom. To return in main menu press **<** button in upper-left corner
