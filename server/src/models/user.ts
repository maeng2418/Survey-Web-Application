import { DataTypes, Model } from 'sequelize';
import { sequelize } from 'modules/database';
import REGEX from 'utils/validation';

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string; // 미리 선언하고 할당안되어도 나중에 반드시 할당될 것을 암시.
  public password?: string; // 자동으로 | undefined를 포함
  public provider!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        is: REGEX.EMAIL_REGEX,
      },
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    provider: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  { timestamps: true, tableName: 'user', sequelize }
);

export default User;
