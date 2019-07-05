## usersテーブル

|Column  |Type   |Options                |
|--------|-------|-----------------------|
|name    |string |null: false,index: true|
|address |string |null: false            |
|password|string |null: false            |
|user_id |integer|null: false            |

### Association
- has_many :comments
- has_many :groups, through: :members
- has_many :members

## groupsテーブル

|Column|Type   |Options    |
|------|-------|-----------|
|name  |string |null: false|

### Association
- has_many :users, through: :members
- has_many :comments
- has_many :members

## membersテーブル

|Column  |Type   |Options                       |
|--------|-------|------------------------------|
|user    |references|null: false, foreign_key: true|
|group   |references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## commnetsテーブル

|Column  |Type       |Options                      |
|--------|-----------|-----------------------------|
|user_id |references |null: false,foreign_key: true|
|group_id|references |null: false,foreign_key: true|
|comment |text       |
|image   |string     |

### Association
- belong_to :user
- belong_to :group